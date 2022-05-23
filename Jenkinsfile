
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "yarn install"
                
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
