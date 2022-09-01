import Home from "./home";
import Head from 'next/head';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};
// const prevTheme = window.localStorage.getItem("theme");
const prevTheme ='light';

export default function App() {
  return (
    <div>
      <Head>
        <title>iHelp Finance</title>
        <link rel="shortcut icon" href="/favicon.ico" />
    
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        
      </Head>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
          <Home />
      </ThemeSwitcherProvider>
    </div>
  );
}
