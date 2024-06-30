export enum SystemProp {
    API_KEY = 'API_KEY',
    APP_WEBHOOK_SECRETS = 'APP_WEBHOOK_SECRETS',
    API_RATE_LIMIT_AUTHN_ENABLED = 'API_RATE_LIMIT_AUTHN_ENABLED',
    API_RATE_LIMIT_AUTHN_MAX = 'API_RATE_LIMIT_AUTHN_MAX',
    API_RATE_LIMIT_AUTHN_WINDOW = 'API_RATE_LIMIT_AUTHN_WINDOW',
    AZURE_OPENAI_ENDPOINT = 'AZURE_OPENAI_ENDPOINT',
    AZURE_OPENAI_API_VERSION = 'AZURE_OPENAI_API_VERSION',
    CACHE_PATH = 'CACHE_PATH',
    CLIENT_REAL_IP_HEADER = 'CLIENT_REAL_IP_HEADER',
    CLOUD_AUTH_ENABLED = 'CLOUD_AUTH_ENABLED',
    CODE_SANDBOX_TYPE = 'CODE_SANDBOX_TYPE',
    CONFIG_PATH = 'CONFIG_PATH',
    COPILOT_INSTANCE_TYPE = 'COPILOT_INSTANCE_TYPE',
    EXECUTION_DATA_RETENTION_DAYS = 'EXECUTION_DATA_RETENTION_DAYS',
    DB_TYPE = 'DB_TYPE',
    EDITION = 'EDITION',
    ENCRYPTION_KEY = 'ENCRYPTION_KEY',
    ENGINE_EXECUTABLE_PATH = 'ENGINE_EXECUTABLE_PATH',
    ENRICH_ERROR_CONTEXT = 'ENRICH_ERROR_CONTEXT',
    ENVIRONMENT = 'ENVIRONMENT',
    EXECUTION_MODE = 'EXECUTION_MODE',
    FLOW_WORKER_CONCURRENCY = 'FLOW_WORKER_CONCURRENCY',
    FRONTEND_URL = 'FRONTEND_URL',
    JWT_SECRET = 'JWT_SECRET',
    LICENSE_KEY = 'LICENSE_KEY',
    LOG_LEVEL = 'LOG_LEVEL',
    LOG_PRETTY = 'LOG_PRETTY',
    LOKI_PASSWORD = 'LOKI_PASSWORD',
    LOKI_URL = 'LOKI_URL',
    LOKI_USERNAME = 'LOKI_USERNAME',
    OPENAI_API_KEY = 'OPENAI_API_KEY',
    OPENAI_API_BASE_URL = 'OPENAI_API_BASE_URL',
    PIECES_SOURCE = 'PIECES_SOURCE',
    POSTGRES_URL = 'POSTGRES_URL',
    POSTGRES_DATABASE = 'POSTGRES_DATABASE',
    POSTGRES_HOST = 'POSTGRES_HOST',
    POSTGRES_PASSWORD = 'POSTGRES_PASSWORD',
    POSTGRES_PORT = 'POSTGRES_PORT',
    POSTGRES_SSL_CA = 'POSTGRES_SSL_CA',
    POSTGRES_USERNAME = 'POSTGRES_USERNAME',
    POSTGRES_USE_SSL = 'POSTGRES_USE_SSL',
    QUEUE_MODE = 'QUEUE_MODE',
    QUEUE_UI_ENABLED = 'QUEUE_UI_ENABLED',
    QUEUE_UI_PASSWORD = 'QUEUE_UI_PASSWORD',
    QUEUE_UI_USERNAME = 'QUEUE_UI_USERNAME',
    REDIS_DB = 'REDIS_DB',
    REDIS_HOST = 'REDIS_HOST',
    REDIS_PASSWORD = 'REDIS_PASSWORD',
    REDIS_PORT = 'REDIS_PORT',
    REDIS_URL = 'REDIS_URL',
    REDIS_USER = 'REDIS_USER',
    REDIS_USE_SSL = 'REDIS_USE_SSL',
    SANDBOX_MEMORY_LIMIT = 'SANDBOX_MEMORY_LIMIT',
    TRIGGER_TIMEOUT_SECONDS = 'TRIGGER_TIMEOUT_SECONDS',
    FLOW_TIMEOUT_SECONDS = 'FLOW_TIMEOUT_SECONDS',
    /**
     * @deprecated It's replaced now with flow timeout and trigger timeout.
     */
    SANDBOX_RUN_TIME_SECONDS = 'SANDBOX_RUN_TIME_SECONDS',
    SANDBOX_PROPAGATED_ENV_VARS = 'SANDBOX_PROPAGATED_ENV_VARS',
    SMTP_HOST = 'SMTP_HOST',
    SMTP_PASSWORD = 'SMTP_PASSWORD',
    SMTP_PORT = 'SMTP_PORT',
    SMTP_USERNAME = 'SMTP_USERNAME',
    SMTP_SENDER_NAME = 'SMTP_SENDER_NAME',
    SMTP_SENDER_EMAIL = 'SMTP_SENDER_EMAIL',
    SMTP_USE_SSL = 'SMTP_USE_SSL',
    TELEMETRY_ENABLED = 'TELEMETRY_ENABLED',
    TEMPLATES_SOURCE_URL = 'TEMPLATES_SOURCE_URL',
    TRIGGER_DEFAULT_POLL_INTERVAL = 'TRIGGER_DEFAULT_POLL_INTERVAL',
    WEBHOOK_TIMEOUT_SECONDS = 'WEBHOOK_TIMEOUT_SECONDS',
    PIECES_SYNC_MODE = 'PIECES_SYNC_MODE',

    // ENTERPRISE ONLY
    APPSUMO_TOKEN = 'APPSUMO_TOKEN',
    FIREBASE_ADMIN_CREDENTIALS = 'FIREBASE_ADMIN_CREDENTIALS',
    FIREBASE_HASH_PARAMETERS = 'FIREBASE_HASH_PARAMETERS',
    PACKAGE_ARCHIVE_PATH = 'PACKAGE_ARCHIVE_PATH',
    SENTRY_DSN = 'SENTRY_DSN',
    STRIPE_SECRET_KEY = 'STRIPE_SECRET_KEY',
    STRIPE_WEBHOOK_SECRET = 'STRIPE_WEBHOOK_SECRET',

    // CLOUD_ONLY
    CLOUD_PLATFORM_ID = 'CLOUD_PLATFORM_ID',
    CLOUDFLARE_AUTH_EMAIL = 'CLOUDFLARE_AUTH_EMAIL',
    CLOUDFLARE_ZONE_ID = 'CLOUDFLARE_ZONE_ID',
    CLOUDFLARE_API_KEY = 'CLOUDFLARE_API_KEY',

    // Workers & App Variables, (Work In Progress)
    CONTAINER_TYPE = 'CONTAINER_TYPE',
}
