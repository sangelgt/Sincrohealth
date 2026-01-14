
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

// Inicializamos el cliente de Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const formSchema = z.object({
  fullName: z.string().min(2),
  specialty: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  monthlyPatients: z.string().nonempty(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    // INSERTAR EN SUPABASE
    const { data, error } = await supabase
      .from('diagnosticos')
      .insert([
        {
          full_name: result.data.fullName,
          specialty: result.data.specialty,
          email: result.data.email,
          phone: result.data.phone,
          monthly_patients: result.data.monthlyPatients
        }
      ]);

    if (error) throw error;

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar datos' }, { status: 500 });
  }
}
