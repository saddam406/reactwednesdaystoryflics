
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm i eslint"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo npm run dev"
            }
        }
    }
}
