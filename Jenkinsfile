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
        echo 'Deploying Angular build to IIS...'
        bat 'rmdir /s /q C:\\inetpub\\wwwroot\\My_Demo_App\\'
        bat 'mkdir C:\\inetpub\\wwwroot\\My_Demo_App\\'
        bat 'xcopy /E /I /Y dist\\My_Demo_App\\browser\\* C:\\inetpub\\wwwroot\\My_Demo_App\\'
    }
}


    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        script {
            emailext(
                to: 'gauri6684@gmail.com',
                subject: "SUCCESS: Jenkins Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Good news! The build succeeded.\n\nCheck details: ${env.BUILD_URL}"
            )
        }
        }
        failure {
            echo 'Pipeline failed. Check logs!'
            script {
            emailext(
                to: 'gauri6684@gmail.com',
                subject: "FAILURE: Jenkins Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Oops! The build failed.\n\nCheck details: ${env.BUILD_URL}"
            )
         }
        }
    }
}
