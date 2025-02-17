package de.gnmyt.mcdash.panel.routes;

import de.gnmyt.mcdash.api.handler.DefaultHandler;
import de.gnmyt.mcdash.api.http.Request;
import de.gnmyt.mcdash.api.http.ResponseController;
import org.bukkit.Bukkit;

import java.nio.file.Files;
import java.nio.file.Paths;


public class ConsoleRoute extends DefaultHandler {

    @Override
    public String path() {
        return "console";
    }

    /**
     * Gets the console log
     * @param request The request object from the HttpExchange
     * @param response The response controller from the HttpExchange
     */
    @Override
    public void get(Request request, ResponseController response) throws Exception {

        int startLine = getIntegerFromQuery(request, "startLine") != null ? getIntegerFromQuery(request, "startLine") : 1;
        int limit = getIntegerFromQuery(request, "limit") != null ? getIntegerFromQuery(request, "limit") : 500;

        Object[] lines = Files.lines(Paths.get("logs//latest.log"))
                .skip(startLine)
                .limit(limit)
                .toArray();

        for (Object line : lines) {
            if (!response.getResponse().getOutput().isEmpty()) response.writeToOutput("\n");
            response.writeToOutput(line.toString());
        }

        response.send();
    }

    /**
     * Sends a console command
     * @param request The request object from the HttpExchange
     * @param response The response controller from the HttpExchange
     */
    @Override
    public void post(Request request, ResponseController response) {
        if (!isStringInBody(request, response, "command")) return;

        Bukkit.getLogger().warning("Executing command \"" + getStringFromBody(request, "command") + "\"..");

        runSync(() -> Bukkit.dispatchCommand(Bukkit.getConsoleSender(), getStringFromBody(request, "command")));

        response.message("Action executed.");
    }
}
