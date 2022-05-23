
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install -g yarn"
                sh "sudo npm i eslint"
                sh "yarn run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "yarn run dev"
            }
        }
    }
}
