interface CartButtonProps {
  buttonText: string;
  onClick: () => void;
}

export default function CartButton({ buttonText, onClick }: CartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        px-3 py-1.5
        text-xs font-medium
        text-zinc-700 hover:text-white focus:text-white
        bg-white hover:bg-amber-900 focus:bg-amber-800
        border border-zinc-200 hover:border-transparent
        rounded-md
        transition-all duration-200 ease-in-out
        focus:outline-none
         hover:shadow-md cursor-pointer
      "
    >
      {buttonText}
    </button>
  );
}
