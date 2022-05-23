
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "yarn install"
                
                sh "yarn run build"
                sh "npm i evergreen-ui"
            }
        }
        stage("Deploy") {
            steps {
                sh "yarn run dev"
            }
        }
    }
}
