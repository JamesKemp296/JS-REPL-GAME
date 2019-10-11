const readlineSync = require('readline-sync')
console.log( "Welcome to Batman: Arkham Asylum!" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: look around, smack a prisoner, run away" );

switch(option) {
    case "look around":
        console.log( "You see a bunch of angry prisoners and the Joker!" );
        let option1_1 = readlineSync.question( "Options: attack Joker, smack a prisoner, run away" );
        switch(option1_1) {
            case "attack Joker":
                console.log( "You punch the Joker in the face and knock him to the ground!" );
                let option1_2 = readlineSync.question( "Options: tie him up, kill him" );
                switch(option1_2) {
                    case "tie him up":
                        console.log( "You tie the Joker up. \nYou throw him in Arkham Asylum and smile.!" );
                        break;
                    case "kill him":
                        console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                        break;
                    default: 
                       console.log( "You stood idle and get hit. \nYou get back up and attack the Joker. \nYou throw him in Arkham Asylum and smile." );
                } //This is closed
                break;
            case "smack a prisioner":
                console.log( "Ouch! What did I ever do to you, man?" );
                let option1_3 = readlineSync.question( "Options: yell at him, kill him" );
                switch(option1_3) {
                    case "yell at him":
                        console.log( "You tell him to shut up and knock him out. \nYou throw him in Arkham Asylum and smile." );
                        break;
                    case "kill him":
                        console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                        break;
                    default: 
                       console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                } //This is closed
                break;
            case "run away":
                console.log( "Batman: \"Bats can't run.\"" );
                let option1_4 = readlineSync.question( "Options: smack a prisoner" );
                switch(option1_4) {
                    case "smack a prisioner":
                        console.log( "Ouch! What did I ever do to you, man?" );
                        let option1_5 = readlineSync.question( "Options: yell at him, kill him" );
                        switch(option1_5) {
                            case "yell at him":
                                console.log( "You tell him to shut up and knock him out. \nYou throw him in Arkham Asylum and smile." );
                                break;
                            case "kill him":
                                console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                                break;
                            default: 
                               console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                        }
                        break;
                    default: 
                       console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                } //This is closed
                break;
            default: 
               console.log( "A prisoner punches you in the face." );
               console.log( "Prisoner: \"Quit messin' around.\"" );
        }
        break;
    case "smack a prisioner":
        console.log( "Ouch! What did I ever do to you, man?" );
        let option1_2 = readlineSync.question( "Options: yell at him, kill him" );
                switch(option1_2) {
                    case "yell at him":
                        console.log( "You tell him to shut up and knock him out." );
                        let option1_4 = readlineSync.question( "Options: jail him, kill him" );
                        switch(option1_4) {
                            case "jail him":
                                console.log( "You tell him to shut up and knock him out. \nYou throw him in Arkham Asylum and smile." );
                                break;
                            case "kill him":
                                console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                                break;
                            default: 
                               console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                        } //This is closed
                        break;
                    case "kill him":
                        console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                        break;
                    default: 
                       console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                } //This is closed
        break;
    case "run away":
        console.log( "Batman: \"Bats can't run.\"" );
        let option3_1 = readlineSync.question( "Options: really I want to run, smack a prisoner" );
        switch(option3_1) {
            case "really I want to run":
                console.log( "You ran away. Game Over" );
                break;
            case "smack a prisioner":
                console.log( "Ouch! What did I ever do to you, man?" );
                let option3_2 = readlineSync.question( "Options: yell at him, kill him" );
                switch(option3_2) {
                    case "yell at him":
                        console.log( "You tell him to shut up and knock him out." );
                        let option3_3 = readlineSync.question( "Options: jail him, kill him" );
                        switch(option3_3) {
                            case "jail him":
                                console.log( "You tell him to shut up and knock him out. \nYou throw him in Arkham Asylum and smile." );
                                break;
                            case "kill him":
                                console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                                break;
                            default: 
                               console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                        } //This is closed
                        break;
                    case "kill him":
                        console.log( "Batman doesn't kill. \nYou throw him in Arkham Asylum and smile." );
                        break;
                    default: 
                       console.log( "A prisoner punches you in the face and Batman flees. Game over." );
                } //This is closed
                break;
            default: 
               console.log( "A prisoner punches you in the face and Batman flees. Game over." );
        }
        break;
    default: 
       console.log( "A prisoner punches you in the face and Batman flees. Game over." );
}