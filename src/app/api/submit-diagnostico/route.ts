
import { NextResponse } from 'next/server';
import { z } from 'zod';


const formSchema = z.object({
  fullName: z.string().min(2, "Nombre inválido"),
  specialty: z.string().min(2, "Especialidad inválida"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  monthlyPatients: z.string().nonempty("Seleccione un rango"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    // In a real application, you would process the data here (e.g., save to a database)
    console.log('Form data received:', result.data);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
