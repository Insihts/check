
function LogoImage({
  className,
  width = 105,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <div>
      {/* Dark image for light mode */}
      <img
        src={'/Prodio/prodio/prodio_logo_3.png'}
        alt={'Prodio'}
        className='h-[45px] w-auto dark:hidden'
      />

        {/* Light image for dark mode */}
      <img
        src={'/Prodio/prodio/prodio_logo_3.png'}
        alt={'Prodio'}
        className='h-[45px] w-auto hidden dark:block'
      />
    </div>
  );
}

export function AppLogo({
  href,
  label,
  className,
}: {
  href?: string;
  className?: string;
  label?: string;
}) {
  return (
      <LogoImage className={className} />
   
  );
}
