// lib/validators/student.ts
import { z } from 'zod'
export const StudentEducationVisa = z.object({
  visaPath: z.enum(['visitor_600','student_500']),
  hasOffer: z.enum(['yes','applied','no']),
  institution: z.string().min(2),
  courseLevel: z.enum(['HighSchool','Bachelor','Master','PhD','Diploma']),
  courseName: z.string().min(2),
  startDate: z.string(),
  endDate: z.string().optional(),
  campusAddress: z.string().optional(),
  visaType: z.string().optional(),
  visaExpiry: z.string().optional(),
})
