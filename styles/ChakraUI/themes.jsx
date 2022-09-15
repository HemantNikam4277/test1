

const breakpoints =  {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
const override = {
   
    colors: {
       
        primary: {
            50: "#E9F3FF",
            100: "#D4E8FE",
            200: "#A9CEFD",
            300:"#7DB1FA",
            400:"#5D96F6",
            500:"#296DF1",
            600:"#1D54CF",
            700:"#143DAD",
            800:"#0D2A8B",
            900:"#001C52"
        },
        warning: {
            50: "#FFFFDE",
            100: "#FFFFB0",
            200: "#FFFF83",
            300:"#FFFF00",
            400:"#FFE600",  
        },
        error: {
            50: "#FF3C31",
            100: "#F03031",
            200: "#DE242B",
            300:"#D11B23",
            400:"#C30216",  
        },
        success:{
            50: "#00BC4B",
            100: "#00AD42",
            200: "#009A36",
            300:"#00892A",
            400:"#006913",  
        },
        neutral:{
            50: "#FFFFFF",
            100: "#D7D7D7",
            200: "#9D9D9D",
            300:"#5D5D5D",
            400:"#393939",  
        }
      
    },
    breakpoints,
    fonts:{
        montserrat: "Montserrat"
    }
    
};
export default override;
