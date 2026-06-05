'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { MotorcycleCategory } from '@/app/constants/motorcycles'

export type Motorcycle = {
  id: string
  name: string
  slug: string
  price: number
  category: MotorcycleCategory | null
  short_description: string | null
  image_url: string
  gallery: string[] | null
  specifications: unknown
  created_at: string

  // Nova polja
  model_year: number | null
  displacement: number | null
  engine_type: string | null
  bore_stroke: string | null
  power: string | null
  max_torque: string | null
  compression_ratio: string | null
  fuel_system: string | null
  valve_train: string | null
  ignition_system: string | null
  starter: string | null
  lubrication_system: string | null
  cooling_system: string | null
  gear_shifting_type: string | null
  transmission_type: string | null
  clutch_type: string | null
  tcs: string | null
  frame: string | null
  front_wheel: string | null
  front_suspension: string | null
  front_suspension_travel: number | null
  front_tyre: string | null
  rear_wheel: string | null
  rear_suspension: string | null
  rear_suspension_travel: number | null
  rear_tyre: string | null
  front_brake: string | null
  front_brake_diameter: number | null
  rear_brake: string | null
  rear_brake_diameter: number | null
  curb_weight: number | null
  seat_height: number | null
  wheelbase: number | null
  overall_length: number | null
  overall_width: number | null
  overall_height: number | null
  ground_clearance: number | null
  fuel_capacity: number | null
  top_speed: number | null
  max_loadage: number | null
  battery: string | null
  throttle_configuration: string | null
  gear_indicator: string | null
  usb_charging_port: string | null
  headlight: string | null
  taillight: string | null
  turn_signal: string | null
  hazard_light: string | null
  abs_system: string | null
  traction_control_system: string | null
}

export async function getMotorcycles() {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching motorcycles:', error)
    return []
  }

  return data as Motorcycle[]
}

export async function getMotorcycleById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching motorcycle:', error)
    return null
  }

  return data as Motorcycle
}

export async function getMotorcycleBySlug(slug: string) {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('Error fetching motorcycle by slug:', error)
    return null
  }

  return data as Motorcycle
}

export async function createMotorcycle(data: Omit<Motorcycle, 'id' | 'created_at'>) {
  const { error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .insert([data])

  if (error) {
    console.error('Error creating motorcycle:', error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/katalog')
  return { success: true }
}

export async function updateMotorcycle(id: string, data: Partial<Omit<Motorcycle, 'id' | 'created_at'>>) {
  const { error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .update(data)
    .eq('id', id)

  if (error) {
    console.error('Error updating motorcycle:', error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/katalog')
  return { success: true }
}

export async function deleteMotorcycle(id: string) {
  const { error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting motorcycle:', error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/katalog')
  return { success: true }
}
