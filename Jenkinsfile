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
                sh 'sudo apt unstall curl'
                sh 'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -'
                echo "deb https://dl.yarnpkg.com/debian/ stable main" | "sudo tee /etc/apt/sources.list.d/yarn.list"
                sh 'yarn install --force'
                sh 'yarn add @ant-design/icons@4.7.0'
                sh 'yarn add escape-string-regexp'
                sh 'yarn run build'
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
