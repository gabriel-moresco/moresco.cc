type DividerProps = {
  delay: number
}

export const Divider = ({ delay }: DividerProps) => (
  <div
    role="separator"
    aria-orientation="horizontal"
    className="h-px animate-in bg-border duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
    style={{ animationDelay: `${delay}ms` }}
  />
)
