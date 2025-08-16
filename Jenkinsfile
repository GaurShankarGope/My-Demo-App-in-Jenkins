pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning workspace...'
                deleteDir()
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/GaurShankarGope/My-Demo-App-in-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                echo 'Building Angular project...'
                bat 'npm run build'
            }
        }
stage('Deploy to IIS') {
    steps {
        echo 'Deploying build...'
        bat """
        xcopy "${WORKSPACE}\\dist\\My_Demo_App" "C:\\inetpub\\wwwroot\\My_Demo_App" /E /I /Y
        """
    }
}

    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs!'
        }
    }
}
