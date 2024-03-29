var app = new Vue (
    {
        el: '#root',
        data: {
           //variabili
           
           utenteCliccato:0,
           //input messaggio
           inputUser:'',
           //input cercanome
           inputContact:'',
           
           imgPath: './assets/img/avatar',
           
           imgPathext: '.jpg',
            
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },      
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],  
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

         




        },



        methods: {

            cliccaElemento(element,index){
                this.utenteCliccato = index;
            },

          


            inputMessage: function(){
                
                let messaggiContatto = this.contacts[this.utenteCliccato].messages;

                messaggiContatto.push( 
                    {
                        date: '10/01/2020 15:30:55',
                        message:this.inputUser,
                        status: 'sent'
                    }
                )
                this.inputUser = '';

                setTimeout(() => {
                    
                    messaggiContatto.push( 
                        {
                            date: '10/01/2020 15:30:55',
                            message:'ok',
                            status: 'received'
                        }
                    )


                  }, "1000")

               },

            //    lastHourMessage(element){
            //     let date = element.date;
            //     date = date.split('');
            //     return date[1];
            //    }
            
            searchName: function () {
                this.contacts.forEach((element, index) => {


                    let names = element.name;
                    //console.log(names)
                    if (
                    names.includes(this.inputContact) ||
                    element.name.toLowerCase().includes(this.inputContact) ||
                    element.name.toUpperCase().includes(this.inputContact)) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }



                });
            },


            deleteMessage: function(messages,index){
              //console.log(messages,index) 
              //console.log(index)
             

              //return messages.splice(0,3);
              this.contacts.forEach((element,index)=>{
                //console.log(element.index)
                if(this.contacts[index].name == this.contacts[this.utenteCliccato].name ){

                    this.contacts[index].messages.forEach((message,ind)=>{
                        console.log(message,ind)
                        if(message.message == messages.message){
                          console.log(message,ind)
                          this.contacts[index].messages.splice(ind,1)  
                        }
                        
                    })
                }
            
                //element.messages.splice(0,3)
              })




            
            }
               

            



        },
    }
)