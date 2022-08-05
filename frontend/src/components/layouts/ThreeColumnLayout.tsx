import classNames from "classnames"
import { useEffect } from "react"
import { Placeholder } from "./Placeholder"

type ThreeColumnLayoutProps  = {
  header?: React.ReactElement<HTMLElement>
  footer?: React.ReactElement<HTMLElement>
  nav?: React.ReactElement<HTMLElement>
  section?: React.ReactElement<HTMLElement>
  aside?: React.ReactElement<HTMLElement>
  asidePosition?: 'left' | 'right'
  bgColor?: 'white' | 'black' | 'indigo' | 'gray'
  children?: JSX.Element[]
}

export const ThreeColumnLayout = ({header, footer, nav, section, aside, bgColor = null, asidePosition = 'right'}: ThreeColumnLayoutProps) => {
  const bodyClass = classNames(
    {'h-full': true},
    {'overflow-hidden': true},
    {[`bg-${bgColor}-50`]: bgColor !== null && bgColor !== 'white' && bgColor !== 'black'},
    {[`bg-${bgColor}`]: bgColor !== null && (bgColor === 'white' || bgColor === 'black')},
  )
  const containerClass = classNames(
    // All screen sizes
    {'h-full': true},
    'flex flex-col'
    // Small and above
    // Medium and above
    // Large and aboe
  )
  const headerClass = classNames(
    // All screen sizes
    'h-16',
    // Small and above
    {'sm:mx-auto': true},
    {'sm:w-full': true}, 
    // Medium and above
    // Large and aboe
  )
  const wrapperClass = classNames(
    'h-full flex min-h-0 flex-1 overflow-hidden'
  )
  const mainClass = classNames(
    // All screen sizes
    'min-w-0 flex-1 border-t border-gray-200 lg:flex'
    // Small and above
    // Medium and above
    // Large and aboe
  )
  const navClass = classNames(
    // All screen sizes
    'hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800'
    // Small and above
    // Medium and above
    // Large and aboe
  )
  const sectionClass = classNames(
    // All screen sizes
    'flex h-full min-w-0 flex-1 flex-col overflow-y-auto'
    // Small and above
    // Medium and above
    // Large and aboe
  )
  const asideClass = classNames(
    // All screen sizes
    'hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 overflow-y-auto'
    // Small and above
    // Medium and above
    // Large and aboe
  )
  const footerClass = classNames(
    // All screen sizes
    {'mx-auto': true},
    {'py-12': true},
    {'px-4': true},
    {'overflow-hidden': true},
    // Small and above
    {'sm:px-6': true},
    // Medium and above
    {'md:px-7': true},
    // Large and aboe
    {'lg:px-8': true},
  )

    /**
   * Add necessary tailwindcss classes to <body>
   * 
   * TODO: Custom hook
   */
  useEffect(() => {
    document.body.classList.add(...bodyClass.split(" "));
  
    return function cleanup() {
      document.body.classList.add(...bodyClass.split(" "));
    };
  }, [bodyClass]);

  return (
      <>
        <div className={containerClass}>
          { header && (
            <header className={headerClass}>
              {header}
            </header>) 
          }
          <div className={wrapperClass}>
            {/* <nav className={navClass}> */}
              { nav ? nav : <Placeholder /> }
            {/* </nav> */}
            <main className={mainClass}>
            { asidePosition === 'left' && (<aside className={asideClass}>{aside || <Placeholder />}</aside>) }
              <section className={sectionClass}>
                { section ? section : <Placeholder />}
              </section>
              { asidePosition === 'right' && (<aside className={asideClass}>{aside || <Placeholder />}</aside>) }

            </main>
          </div>
          {footer && (
            <footer className={footerClass}>
              {footer}
            </footer>
          )}
        </div>
      </>
    )
}