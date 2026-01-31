export const SOCIAL_LINKS = { 
  instagram: "https://www.instagram.com/syrentravel", 
  whatsapp: "https://wa.me/201016015723",
  linkedin: "https://www.linkedin.com/company/syren-travel",
  email: "Syrentravel@outlook.com", 
}; 

export const WHATSAPP_MESSAGE = 
  "Hello Syren Concierge — I’d love to design a private journey through Egypt. Could you share your finest recommendations and availability?"; 

export const WHATSAPP_LINK = 
  `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`; 

export const SOCIAL_EVENTS = {
  whatsapp: "cta_whatsapp_click",
  instagram: "cta_instagram_click",
  linkedin: "cta_linkedin_click",
  email: "cta_email_click",
};
