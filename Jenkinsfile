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
                sh 'yarn install --force'
                sh 'yarn add @ant-design/icons@4.7.0'
                sh 'yarn add escape-string-regexp'
                sh 'yarn run build'
            }
        }
       

    }
}
