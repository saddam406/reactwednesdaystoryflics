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
                sh 'yarn install' 
                sh 'yarn run build'
                sh 'yarn run dev'
               
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
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './jenkins/scripts/kill.sh'
                            }
                        }

    }
}
