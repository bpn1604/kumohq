import React from "react";

const Footer = ({ column1, column2, column3, column4, column5 }) => {
  return (
    <>
    <div style={{height:"420px" ,width:"100%" ,backgroundColor:"whitesmoke" , padding:"80px"}}>
      <ol style={{fontSize:"12px", fontFamily:"sans-serif"}}>
        <li>1 #1 AI-powered email marketing platform: Based on December 2023 publicly available data on the number of customers of competitors that also advertise using AI to enhance their email marketing and automation products and services.</li>
        <li>2 #1 email marketing and automation platform: Mailchimp is the #1 email marketing and automation platform based on December 2023 publicly available data on competitors' number of customers.</li>
        <li>3 SMS Marketing: SMS is available as an add-on to US paid plans only and SMS credits are added to your account after purchase. Application and agreement to terms is required before purchasing credits. Credits are issued monthly and unused credits expire and do not roll over. Pricing varies. MMS is only available on Premium and Standard plans. See terms for details.</li>
        <li>4 Intuit Assist: Intuit Assist functionality (beta) is available to certain users with Premium, Standard and Legacy plans in select countries in English only. Access to Intuit Assist is available at no additional cost at this time. Pricing, terms, conditions, special features and service options are subject to change without notice. Availability of features and functionality varies by plan type. Features may be broadly available soon but represents no obligation and should not be relied on in making a purchasing decision. For details, please view Mailchimp’s various plans and pricing.</li>
        <li>5 Personalized onboarding: Onboarding services differ per plan and are available for new or upgraded users with a Standard or Premium plan for the first 90 days after account creation or upgrade. Onboarding services are currently offered in English, Spanish and Portuguese for Premium plans, and in English for Standard plans.</li>
        <li>6 26X ROI on Standard: Mailchimp users on the Standard plan see up to 26x ROI: All e-comm revenue attributable to Standard plan users' Mailchimp campaigns for Jan '22 - Nov '22 period.</li>
        <li>7 Up to 7x more orders: Up to 7x more orders with Customer Journey Builder automations generated through users' connected stores versus when they used bulk emails for Jan 1 2022 - Jul 1 2023 period. Features and functionality of CJB varies by plan.</li>
        <li>8 Up to 141% more revenue: Up to 141% more revenue for users' connected stores using predictive segmented emails versus non-predictive segmented emails for Jan 1 2022–Jul 1 2023 period. Standard and Premium plans only.</li>
        <li>9 Availability of features and functionality varies by plan type. For details, view plans and pricing.</li>
        <li>10 39X ROI: All e-comm revenue attributable to paid plan users' Mailchimp campaigns for Aug '21 - July '22 period.</li>
        <li>11 $1.7K per campaign: Based on e-commerce users subscribed to a paid plan, with campaigns for connected stores that generated revenue between January and November 2022.</li>
    </ol>
    </div>
    <div className="footer w-full bg-[#E7B75F] flex flex-col justify-around p-[5rem]">
      <div className="columns flex flex-row justify-around">
        <div className="column">
          <div style={{ marginBottom: "50px", fontSize: "20px" }}>Products</div>
          {column1.map((text, index) => (
            <div
              key={index}
              className="text"
              style={{ textDecoration: "underline", marginBottom: "0.5rem" }}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="column">
          <div style={{ marginBottom: "50px", fontSize: "20px" }}>
            Resources
          </div>
          {column2.map((text, index) => (
            <div
              key={index}
              className="text"
              style={{ textDecoration: "underline", marginBottom: "0.5rem" }}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="column">
          <div style={{ marginBottom: "50px", fontSize: "20px" }}>
            Community
          </div>
          {column3.map((text, index) => (
            <div
              key={index}
              className="text"
              style={{ textDecoration: "underline", marginBottom: "0.5rem" }}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="column">
          <div style={{ marginBottom: "50px", fontSize: "20px" }}>Company</div>
          {column4.map((text, index) => (
            <div
              key={index}
              className="text"
              style={{ textDecoration: "underline", marginBottom: "0.5rem" }}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="column">
          <div style={{ marginBottom: "50px", fontSize: "20px" }}>Help</div>
          {column5.map((text, index) => (
            <div
              key={index}
              className="text"
              style={{ textDecoration: "underline", marginBottom: "0.5rem" }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
      <hr style={{ borderColor: "black" }} />
      <div
        className="logos flex"
        style={{
          width: "50%",
          marginLeft: "450px",
          marginTop: "40px",
          alignItems: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAGoAcAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgQFAwEG/9oACAEBAAAAAPpQAAAAK2Po3/QBmZULOxaAMzMjBobEwMzMQjfsWbXoZmYdbhbtBmZiPl/r1uzDMzPIO25YAzMuEtPTkAo4d/W6gBGQAAAAAH//xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQH/2gAKAgIQAxAAAAAAAJxrw+apXAWw2ZOVnydfX7ZEthvy8vpcLVro6WcthK7n9OzBbQHqrVZmeAAAf//EADAQAAECAggEAwkAAAAAAAAAAAECAwARBAUQIDAxQYESISJRE1KhFCMyQFBhYoKR/9oACAEBAAE/APn6U/4DcwJqOUe2Uqc/FVDFPQvk70KxKxya3gixilOsZGafKYYpbT/LJXlOFWOTW9ihaxTnUSSvrHrCFpWJg4FY5Nb2kWMs8HUr4oBIMwYRSNF/2AQRMG9WOTW9xgI4z30uUYmSherHJre0mASDMQ06HB+ViGlr+w7whAQJC9WOTW9hNrLTzi/dDLXQQ2wEyKuasCscmt4JsSlS1BKUknsIYq7V4/qISlKQAkAAaDBp7SltpUkTKYnDFAcc5udCfWGmW2UyQmWJwJnPhE+8vo3/xAAiEQACAgEDBAMAAAAAAAAAAAABAgADEQQQEiAwMTNBUZH/2gAIAQIBAT8A7FahnAMsR6mwYGB6afYssRbFKmOjVsVMOr4vgDKyu1LBlTvT7F21ti2A1r+xlKkgzS1PzD+BvT7Fmp1HHKJ5+TApbxBSmQSMkdAJByDgwV/Zz3P/xAAmEQABBAADCAMAAAAAAAAAAAABAAIDEQQyQRASICEiMDFhE1Fy/9oACAEDAQE/AOw800oSSRu82o5mP9HhkyFEAhEEGlBBJ8fW7noE5pb52yZDswuDsCSQflEEFSubVa7ZMhWEwu/Uj8ugT5GRjqKlndJ6HBy1Fj6TsUapjd1Ekmye3//Z"
          alt="Google Play Store Logo"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook Logo"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <img
          src="https://th.bing.com/th?id=OIP.-aG8-Uo70blrFBtbisdtqQHaGB&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Twitter Logo"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
      </div>
    </div>
    
    </>
  );
};

export default Footer;
