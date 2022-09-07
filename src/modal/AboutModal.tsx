
import React from 'react';
import { HeroIcon, Button, IconButton, Dialog } from '@neo4j-ndl/react';

export const NeoAboutModal = ({ open, handleClose, getDebugState }) => {
    const app = "NeoDash - Neo4j Dashboard Builder";
    const version = "2.1.5";

    const downloadDebugFile = () => {
        const element = document.createElement("a");
        const state = getDebugState();
        state["version"] = version;
        const file = new Blob([JSON.stringify(state, null, 2)], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "neodash-debug-state.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <div>
            <Dialog
                onClose={handleClose}
                open={open == true}
                aria-labelledby="form-dialog-title"
                size="large"
                >
                <Dialog.Header>
                    About NeoDash
                </Dialog.Header>
                <Dialog.Content>
                <div>
                        NeoDash is a dashboard builder for the Neo4j graph database.<br />
                        If you can write Cypher queries, you can build a dashboard in minutes.
                        <hr></hr>
                        <h4>Core Features</h4>
                        <ul>
                            <li>An editor to write and execute <a target="_blank" href="https://neo4j.com/developer/cypher/">Cypher</a> queries.</li>
                            <li>Use results of your Cypher queries to create tables, bar charts, graph visualizations, and more.</li>
                            <li>Style your reports, group them together in pages, and add interactivity between reports.</li>
                            <li>Save and share your dashboards with your friends.</li>
                        </ul>
                        No connectors or data pre-processing needed, it works directly with Neo4j!
                        <hr></hr>
                        <h4>Getting Started</h4>
                        You will automatically start with an empty dashboard when starting up NeoDash for this first time.<br />
                        Click the <strong>(<HeroIcon className="ndl-icon n-w-6 n-h-6" type="outline" iconName="BookOpenIcon" style={{ display: "inline" }} /> Documentation)</strong> button to see some example queries and visualizations.
                        <hr></hr>
                        <h4>Extending NeoDash</h4>
                        NeoDash is built with React and <a target="_blank" href="https://github.com/adam-cowley/use-neo4j">use-neo4j</a>,
                        It uses <a target="_blank" href="https://github.com/neo4j-labs/charts">charts</a> to power some of the visualizations, and <a target="_blank" href="https://www.openstreetmap.org/">openstreetmap</a> for the map view.<br />
                        You can also extend NeoDash with your own visualizations. Check out the developer guide in the <a target="_blank" href="https://github.com/neo4j-labs/neodash/"> project repository</a>.
                        <hr></hr>
                        <h4>Contact</h4>
                        For suggestions, feature requests and other feedback: create an issue on the <a href="https://github.com/neo4j-labs/neodash">GitHub repository</a>, 
                        or the <a href={"https://community.neo4j.com/t5/forums/filteredbylabelpage/board-id/integrations/label-name/neodash"}>Neo4j Community Forums</a>.
                        <br />
                        <hr></hr>
                        <br />
                        <table style={{width: "100%"}}>
                            <tr>
                                <td>
                                    <Button
                                        onClick={downloadDebugFile}
                                        fill="outlined"
                                        color="neutral"
                                        buttonSize="small">
                                        Debug Report
                                        <HeroIcon className="ndl-icon n-w-6 n-h-6" type="outline" iconName="BeakerIcon" />
                                    </Button>
                                </td>
                                <td>
                                    <i style={{ float: "right", fontSize: "11px" }}>v{version}</i>
                                </td>
                            </tr>
                        </table>
                    </div>
                </Dialog.Content>
            </Dialog>
        </div >
    );
}

export default (NeoAboutModal);

