interface InstructionViewProps {}

export default function InstructionView({}: InstructionViewProps) {
  return (
    <div>
      <p className="text-center text-secondary">
        How many flags can you remember selecting?
      </p>
      <p className="text-center text-secondary">
        Click each flag but only click a flag one time.
      </p>
    </div>
  );
}
