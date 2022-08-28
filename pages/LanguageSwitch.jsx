
export default function LanguageSwitch(props) {

if (props.lang == null) {
  return ''
}

const languageFlag = {
  "en": "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png",
  "es": "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Spain.png",
  "fr": "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_France.png",
  "cn": "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_China.png",
}
const languages = Object.keys(languageFlag);

const additionalOptions = [];
for (let i=0;i<languages.length;i++) {
  if (languages[i] != props.lang) {
    additionalOptions.push(languages[i]);
  }
}

return (<div className="switch-lang"> 
  <div className="current-lang">
    <p className="lang-text">{props.lang.toUpperCase()}</p>
  </div>
  <div className="lang-dropdown">
    {additionalOptions.map((l)=>{return <div key={l} onClick={()=>{props.handleLangChange(l)}}className="selecting-lang">
      <p className="lang-text">{l.toUpperCase()}</p>
    </div>})}
  </div>
</div>)

}