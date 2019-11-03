/*
 * Main JS file for FAIR Metadata extension of OpenRefine
 */
/* global importPackage, module, Packages, ClientSideResourceManager */
/* eslint-disable no-unused-vars */

function init() {
    const RefineServlet = Packages.com.google.refine.RefineServlet;
    const MetadataCommands = Packages.solutions.fairdata.openrefine.metadata.commands;

    // Commands
    RefineServlet.registerCommand(module, "fdp-auth", new MetadataCommands.AuthCommand());
    RefineServlet.registerCommand(module, "fdp-metadata", new MetadataCommands.FDPMetadataCommand());
    RefineServlet.registerCommand(module, "catalogs-metadata", new MetadataCommands.CatalogsMetadataCommand());
    RefineServlet.registerCommand(module, "datasets-metadata", new MetadataCommands.DatasetsMetadataCommand());
    RefineServlet.registerCommand(module, "distributions-metadata", new MetadataCommands.DistributionsMetadataCommand());
    RefineServlet.registerCommand(module, "typehints", new MetadataCommands.TypehintsCommand());

    // Resources
    ClientSideResourceManager.addPaths(
        "project/scripts",
        module,
        [
            "scripts/api-client.js",
            "scripts/helpers.js",
            "scripts/menu-bar-extension.js",
            "scripts/metadata-specs.js",
            "scripts/dialogs/metadata-form-dialog.js",
            "scripts/dialogs/post-fdp-dialog.js",
        ]);
    ClientSideResourceManager.addPaths(
        "project/styles",
        module,
        [
            "styles/dialogs/metadata-form-dialog.less",
            "styles/dialogs/post-fdp-dialog.less",
        ]);
}



