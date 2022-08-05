import classNames from "classnames"
import { useEffect } from "react"
import { Placeholder } from "./Placeholder"

type OneColumnLayoutProps  = {
  header?: React.ReactElement<HTMLElement>
  main?: React.ReactElement<HTMLElement>
  footer?: React.ReactElement<HTMLElement>
  //justify: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  maxWidth: 'none' | 'md' | 'content' | 'xl'
  bgColor?: 'black' | 'white' | 'indigo' | 'gray'
  children?: JSX.Element[]
}

export const OneColumnLayout = ({header, main, footer, maxWidth, bgColor = null}: OneColumnLayoutProps) => {
  const bodyClass = classNames(
    {'h-full': true},
    {[`bg-${bgColor}-50`]: bgColor !== null && bgColor !== 'white' && bgColor !== 'black'},
    {[`bg-${bgColor}`]: bgColor !== null && (bgColor === 'white' || bgColor === 'black')},
  )
  const containerClass = classNames(
    {'min-h-full': true}, // fullscreen
    {'flex': true}, // flex layout
    {'flex-col': true}, // stacked
    {'justify-center': true}, // center aligned
    // All screen sizes
    {'py-12':  maxWidth !== 'none'},
    // Small and above
    {'sm:px-6': maxWidth !== 'none'},
    // Medium and above
    {'md:px-7':  maxWidth !== 'none'},
    // Large and aboe
    {'lg:px-8':  maxWidth !== 'none'},
  )
  const headerClass = classNames(
    // All screen sizes
    // Small and above
    {'sm:mx-auto': true},
    {'sm:w-full': true}, 
    {'sm:max-w-md': maxWidth === 'md'} // constrain to breakpoint
    // Medium and above
    // Large and aboe
  )
  const mainClass = classNames(
    // All screen sizes
    {'mt-8': true},
    {'max-w-max': maxWidth === 'content'}, // constrain to breakpoint
    // Small and above
    {'sm:mx-auto': true},
    {'sm:w-full': true}, 
    {'sm:max-w-md': maxWidth === 'md'} // constrain to breakpoint
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
          <header className={headerClass}>
            { header }
          </header>
          <main className={mainClass}>
            { main }
          </main>
          <footer className={footerClass}>
            { footer }
          </footer>
        </div>
      </>
    )
}