// app/(auth)/signup/page.tsx
'use client'
import { useState } from 'react'
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material'

const steps = ['Choose role','Account','Details']

export default function SignupPage() {
  const [active, setActive] = useState(0)
  return (
    <Box sx={{maxWidth: 720, mx:'auto', p:3}}>
      <Stepper activeStep={active} alternativeLabel>
        {steps.map(s=> <Step key={s}><StepLabel>{s}</StepLabel></Step>)}
      </Stepper>
      <Box sx={{mt:4}}>
        {/* TODO: render form by role + step */}
      </Box>
      <Box sx={{mt:3, display:'flex', gap:2, justifyContent:'space-between'}}>
        <Button disabled={active===0} onClick={()=>setActive(x=>x-1)}>Back</Button>
        <Button variant="contained" onClick={()=>setActive(x=>Math.min(x+1, steps.length-1))}>
          {active===steps.length-1?'Create account':'Next'}
        </Button>
      </Box>
    </Box>
  )
}