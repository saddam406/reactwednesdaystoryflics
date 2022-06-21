#!/bin/groovy
pipeline {
  agent any
  stages {
    stage('Startup') {
      steps {
        script {
          bat 'npm cache clean --force'
        
          
        }
      }
    }
    stage('Test') {
      steps {
        script {
          bat 'npm install --save-dev jest'
          bat 'npm install jest-junit'
          bat 'npm run test'
        }
      }
      post {
        always {
          junit 'output/coverage/junit/junit.xml'
        }
      }
    }
    stage('Build') {
      steps {
        script {
          bat 'npm start'
          bat 'npm pack'
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
   
     

