import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AWSSecretMangerService {

    private readonly logger = new Logger();
    private readonly AWS_REGION = 'awsSecretsManager.region';
    private readonly SM_SECRET_KEY = 'awsSecretsManager.secretKey';
    private secretMangerClient: SecretsManagerClient;

    constructor(private configService: ConfigService) { }

    public initializeAWSSMClient() {
        Logger.debug("AWS SecretsManager client is initializing");
        this.secretMangerClient = new SecretsManagerClient({
            region: this.configService.get(this.AWS_REGION),
        });
    }

    public getSecretValue() {
        if(!this.secretMangerClient) {
            this.initializeAWSSMClient();
        }
        const config = this.configService.get(this.SM_SECRET_KEY);
        if(!config) {
            Logger.warn("AWS SecretsManager Application configuration missing.");
        }
        const command = new GetSecretValueCommand({
            SecretId: this.configService.get(this.SM_SECRET_KEY)
        });
        return this.secretMangerClient.send(command).then(
            (data) => {
                return data.SecretString;
            },
            (error) => {
                this.logger.error("Unable to fetch the secret value", error);
            }
        );
    }
}
