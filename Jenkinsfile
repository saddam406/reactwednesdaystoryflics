pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
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
    }
}
