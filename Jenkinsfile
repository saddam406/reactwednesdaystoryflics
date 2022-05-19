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
                sh 'npm run dev'
            }
        }
        stage('Test') {
                    steps {
                        sh './scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                                sh './scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './scripts/kill.sh'
                            }
                        }

    }
}
