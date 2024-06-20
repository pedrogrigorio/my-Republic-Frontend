import { cn } from '@/lib/utils'

interface StepNavigatorProps {
  steps: number
  currentStep: number
  className: string
}

export default function StepNavigator({
  steps,
  currentStep,
  className,
}: StepNavigatorProps) {
  return (
    <div className={cn('flex items-center gap-6', className)}>
      {Array.from({ length: steps - 1 }, (v, i) => i + 1).map((step) => (
        <>
          <StepIndicator step={step} currentStep={currentStep} />
          <StepTrack step={step} currentStep={currentStep} />
        </>
      ))}

      <StepIndicator step={steps} currentStep={currentStep} />
    </div>
  )
}

interface StepIndicatorProps {
  step: number
  currentStep: number
}

const StepIndicator = ({ step, currentStep }: StepIndicatorProps) => {
  return (
    <div
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-strong transition-colors delay-100 duration-300',
        currentStep >= step && 'bg-contrast text-white',
      )}
    >
      {step}
    </div>
  )
}

interface StepTrackProps {
  step: number
  currentStep: number
}

const StepTrack = ({ step, currentStep }: StepTrackProps) => {
  return (
    <div className="relative h-2 w-24 rounded-full bg-gray-200">
      <div
        className={cn(
          'bg-contrast absolute h-full w-0 rounded-full transition-all duration-300',
          currentStep > step && 'w-full',
        )}
      />
    </div>
  )
}
