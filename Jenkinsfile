pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                bat "npm cache clean --force"
                bat "git rm -r --cached node_modules"
                bat "npm install swr"
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
   
     

