pipeline {
   agent any
   stages {
    stage('Startup') {
      steps {
        script {
            bat "npm install --force"
        }
      }
    }
    stage('install') {
      steps {
        script {
             bat "npm install swr"
         
          
        }
      }
      post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
        }
      }
    }
    stage('Build') {
      steps {
        script {
            bat "npm install pm2-windows-startup -g"
            bat "pm2 start npm run dev"
        }
      }
    }
    stage('Deploy') {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        script {
          def server = Artifactory.server 'My_Artifactory'
          uploadArtifact(server)
        }
      }
    }
  }
}
def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "continuous-test-code-coverage-guide*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)

  def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}
   
     

