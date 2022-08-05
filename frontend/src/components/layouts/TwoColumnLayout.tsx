import classNames from "classnames"
import { useEffect } from "react"
import { Placeholder } from "./Placeholder"

type TwoColumnLayoutProps  = {
  header?: React.ReactElement<HTMLElement>
  footer?: React.ReactElement<HTMLElement>
  section?: React.ReactElement<HTMLElement>
  aside?: React.ReactElement<HTMLElement>
  bgColor?: 'white' | 'black' | 'indigo' | 'gray'
  asidePosition?: 'left' | 'right'
  asideAs?: 'nav' | 'aside'
  children?: JSX.Element[]
}

export const TwoColumnLayout = ({header, footer, section, aside, bgColor = null, asideAs = 'nav', asidePosition = 'left'}: TwoColumnLayoutProps) => {
  const bodyClass = classNames(
    {'h-full': true},
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
    // Small and above
    {'sm:mx-auto': true},
    {'sm:w-full': true}, 
    // Medium and above
    // Large and aboe
  )
  const mainClass = classNames(
    // All screen sizes
    {'h-full': true},
    'flex-1 relative z-0 flex overflow-hidden border-t border-gray-200'

    // Small and above
    // Medium and above
    // Large and aboe
  )
  const sectionClass = classNames(
    // All screen sizes
    'flex-1 relative z-0 overflow-y-auto focus:outline-none'
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
          <main className={mainClass}>
              { asideAs === 'nav' && asidePosition === 'left' && (<nav className={asideClass}>{aside || <Placeholder />}</nav>) }
              { asideAs === 'aside' && asidePosition === 'left' && (<aside className={asideClass}>{aside || <Placeholder />}</aside>) }
              <section className={sectionClass}>
                { section ? section : <Placeholder /> }
              </section>
              { asideAs === 'aside' && asidePosition === 'right' && (<aside className={asideClass}>{aside || <Placeholder />}</aside>) }
              { asideAs === 'nav' && asidePosition === 'right' && (<nav className={asideClass}>{aside || <Placeholder />}</nav>) }
          </main>
          {footer && (
            <footer className={footerClass}>
              {footer}
            </footer>
          )}
        </div>
      </>
    )
}