        function valida(){
            let cpf = document.getElementById('cpf').value;
            
            if(cpf == ""){
                alert("Por favor, volte e preencha o seu cpf");
                document.getElementById('cpf').focus();
                return false;        
               }

            let rg = document.getElementById('rg').value;
            
               if(rg == ""){
                   alert("Por favor, volte e preencha o seu rg");
                   document.getElementById('rg').focus();
                   return false;        
                  }


            let email = document.getElementById('mail').value;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               
               if (!email.match(mailformat)) {
                   alert('O email está inválido');
                   document.getElementById('mail').focus();
                   return false;
               }
        }