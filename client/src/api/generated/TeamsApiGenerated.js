/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN TeamsApiGenerated.js PLEASE EDIT ../TeamsApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class TeamsApiGenerated {

  static contextUrl = properties.endpoint + "/teams";

  // CRUD METHODS

  /**
  * TeamsService.create
  *   @description CRUD ACTION create
  *
  */
  static createTeams(teams) {
    return axios.post(TeamsApiGenerated.contextUrl, teams )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * TeamsService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteTeams(id) {
    return axios.delete(TeamsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * TeamsService.findByname
  *   @description CRUD ACTION findByname
  *   @param String key Id of the resource name to search
  *
  */
  static findByname(id) {
    return axios.get(TeamsApiGenerated.contextUrl + "/findByname/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * TeamsService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneTeams(id) {
    return axios.get(TeamsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * TeamsService.list
  *   @description CRUD ACTION list
  *
  */
  static getTeamsList() {
    return axios.get(TeamsApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * TeamsService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveTeams(teams) {
    return axios.post(TeamsApiGenerated.contextUrl + "/" + teams._id, teams )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default TeamsApiGenerated;
