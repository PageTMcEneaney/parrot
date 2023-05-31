/*
 * Copyright (c) 2018 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

export default class Mock {
  constructor(structure) {
    this.structure = structure;
  }

  query = value => {
    this.structure.request.query = value;
    return this;
  };

  headers = value => {
    this.structure.request.headers = value;
    return this;
  };

  response = value => {
    this.structure.response.body = value;
    return this;
  };

  data = value => {
    this.structure.response.data = value;
    return this;
  };

  errors = value => {
    this.structure.response.errors = value;
    return this;
  };

  delay = value => {
    this.structure.response.delay = value;
    return this;
  };

  status = value => {
    this.structure.response.status = value;
    return this;
  };
}
