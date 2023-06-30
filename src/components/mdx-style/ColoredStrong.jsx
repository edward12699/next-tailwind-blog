import clsx from 'clsx'

const variantStyles = {
  primary:
    'font-semibold text-emerald-500',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900   dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 ',
}

// colored strong
export function CS({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md  text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return <span className={className} {...props} ></span>
}
