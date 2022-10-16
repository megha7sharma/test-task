import React, {useState} from "react";
import "../styles/profile.scss";
import { Formik } from "formik";
import {FormattedMessage} from 'react-intl';
import {IntlProvider} from 'react-intl';
import French from '../components/lang/fr.json'
import English from '../components/lang/en.json';

export const Profile = () => {
    const [val, setVal] = useState({fname: '', lname: ''})
    const [locale, setLocale] = useState("en")
    const [msg, setMsg] = useState(English)

let lang;
if (locale==="en") {
   lang = English;
} else {
   if (locale === "fr") {
       lang = French;
   }
}
    return (
        <Formik
        initialValues={{ fname: "", lname: ""}}
        onSubmit={(values) => {
            console.log('values', values)
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <IntlProvider locale={locale} messages={msg}>
            <div className="profile-wrapper">
            <div className="profile-container">
              <form noValidate onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fname}
                  placeholder="First Name"
                  className="input-box"
                  id="fname"
                />
                <input
                  type="text"
                  name="lname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                  placeholder="Last Name"
                  className="input-box"
                />                  
                <button type="submit" className="btn" onClick={() => {
                  setLocale("fr")
                  setMsg(French)
                }}>Translate</button>
                <p style={{color:"white"}}>
                <FormattedMessage
                    id="app.text"
                    defaultMessage="Hello, welcome {user}"
                    description="Welcome message"
                    values={{ user: values.fname + values.lname }}/>
                </p>
              </form>
            </div>
          </div>
          </IntlProvider>
        )}
      </Formik>
    )
}