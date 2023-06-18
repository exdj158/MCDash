package de.gnmyt.mcdash.api.http;

/**
 * All content types needed by this plugin
 */
public enum ContentType {

    /**
     * The default text content type
     */
    TEXT("text/html", "html"),

    /**
     * The json content type
     */
    JSON("application/json", "json"),

    /**
     * The multipart content type
     * Used by the {@link de.gnmyt.mcdash.api.handler.MultipartHandler}
     */
    MULTIPART("multipart/form-data", null),

    /**
     * The css content type
     */
    CSS("text/css", "css"),

    /**
     * The javascript content type
     */
    JAVASCRIPT("application/javascript", "js"),

    /**
     * The png content type
     */
    PNG("image/png", "png"),

    /**
     * The jpeg content type
     */
    JPEG("image/jpeg", "jpeg"),

    /**
     * The svg content type
     */
    SVG("image/svg+xml", "svg");

    private String type;
    private String fileEnding;

    /**
     * The basic constructor of the {@link ContentType}
     * @param type The content type (header value)
     */
    ContentType(String type, String fileEnding) {
        this.type = type;
        this.fileEnding = fileEnding;
    }

    public static ContentType getContentType(String fileEnding) {
        for (ContentType contentType : values()) {
            if (contentType.getFileEnding() != null && fileEnding.endsWith(contentType.getFileEnding()))
                return contentType;
        }
        return TEXT;
    }

    /**
     * Gets the content type
     * @return the content type
     */
    public String getType() {
        return type;
    }

    /**
     * Gets the file ending of the content type
     * @return the file ending of the content type
     */
    public String getFileEnding() {
        return fileEnding;
    }
}
