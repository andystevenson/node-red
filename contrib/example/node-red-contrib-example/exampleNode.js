module.exports = function (RED) {

    function ExampleNode(config) {
        let node = this;
        RED.nodes.createNode(this, config);
        this.append = config.append;
        this.operation = config.operation;

        this.on("input", function(msg) {
            if (typeof msg.payload === 'string') {
                switch (node.operation) {
                    case "lower":
                        msg.payload = msg.payload.toLowerCase();
                    break;
                    case "upper":
                        msg.payload = msg.payload.toUpperCase();
                    break;
                    case "append":
                        msg.payload = msg.payload + node.append;
                    break;
                    default:
                        msg.payload = msg.payload.toLowerCase();
                    break;
                }
                node.send(msg);
            }
            else {
                node.error("Payload not a string", msg);
            }
        });
    }

    RED.nodes.registerType("example", ExampleNode);
}