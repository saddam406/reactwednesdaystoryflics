pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean --force'
                sh 'rm -rf node_modules' 
                sh 'yarn install escape-string-regexp'
                sh 'yarn add  @ant-design/icons@4.7.0'
               
               
                sh 'yarn  install' 
                sh 'yarn add module-not-found-error'
                sh 'yarn run build'
                
               
                sh 'yarn add @escape-string-regexp@4.0.0 --dev'
              
              
                
                
                
                
                
                
               
            }
        }
        stage('Test') {
                    steps {
                        sh './jenkins/scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                                sh './jenkins/scripts/deliver.sh'
                                sh 'yarn run dev'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './jenkins/scripts/kill.sh'
                            }
                        }

    }
}
