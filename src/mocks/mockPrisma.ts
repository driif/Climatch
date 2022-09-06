import { Kontakt, Profile } from "@prisma/client";

export const mockPrisma = {
    user: {},
    profile: {findMany: () => Promise.resolve([
        {
            userId: 1,        
            firstname: "Pavel",
            lastname: "Durow",
            bio: "geb.",
            location: "no",
            city: "not necessary",
        } as Profile,
        {
            userId: 2,        
            firstname: "Mark",
            lastname: "Zuckerberg",
            bio: "geb.",
            location: "no",
            city: "not necessary",
        } as Profile,
    ])},

    kontakt: { findMany: () => Promise.resolve([
      {  
        profileId: 1,
        email: "andri@dev.de",
        country: "De",
        city: "Plauen", 
        plz: "08529", 
        street: "liebig",
        telefon: "49176", 
        website: "climatch.heroku.com"  
      } as Kontakt,
      {  
        profileId: 2,
        email: "taras@dev.de",
        country: "UA",
        city: "Kiew", 
        plz: "03087", 
        street: "umanska",
        telefon: "38067", 
        website: "climatch.gov.ua"  
      } as Kontakt,
      {  
        profileId: 3,
        email: "zalupa@dev.de",
        country: "Pl",
        city: "Warsawa", 
        plz: "07934", 
        street: "Zalupska",
        telefon: "29139", 
        website: "blyadki.pl"  
      } as Kontakt,
    ])}
  }