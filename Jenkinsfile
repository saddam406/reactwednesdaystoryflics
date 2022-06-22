pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                bat "npm cache clean --force"
                bat "npm install --force"
               
                
     
            }
        }
        stage("Deploy") {
            steps {
                  bat "npm run dev"
                 
                  
            }
        }
    }
}
   
     

