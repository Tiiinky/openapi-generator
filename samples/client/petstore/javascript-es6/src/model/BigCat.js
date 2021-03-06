/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BigCatAllOf from './BigCatAllOf';
import Cat from './Cat';

/**
 * The BigCat model module.
 * @module model/BigCat
 * @version 1.0.0
 */
class BigCat {
    /**
     * Constructs a new <code>BigCat</code>.
     * @alias module:model/BigCat
     * @extends module:model/Cat
     * @implements module:model/Cat
     * @implements module:model/BigCatAllOf
     * @param className {String} 
     */
    constructor(className) { 
        Cat.initialize(this, className);BigCatAllOf.initialize(this);
        BigCat.initialize(this, className);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, className) { 
    }

    /**
     * Constructs a <code>BigCat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BigCat} obj Optional instance to populate.
     * @return {module:model/BigCat} The populated <code>BigCat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BigCat();
            Cat.constructFromObject(data, obj);
            Cat.constructFromObject(data, obj);
            BigCatAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BigCat.KindEnum} kind
 */
BigCat.prototype['kind'] = undefined;


// Implement Cat interface:
/**
 * @member {String} className
 */
Cat.prototype['className'] = undefined;
/**
 * @member {String} color
 * @default 'red'
 */
Cat.prototype['color'] = 'red';
/**
 * @member {Boolean} declawed
 */
Cat.prototype['declawed'] = undefined;
// Implement BigCatAllOf interface:
/**
 * @member {module:model/BigCatAllOf.KindEnum} kind
 */
BigCatAllOf.prototype['kind'] = undefined;



/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BigCat['KindEnum'] = {

    /**
     * value: "lions"
     * @const
     */
    "lions": "lions",

    /**
     * value: "tigers"
     * @const
     */
    "tigers": "tigers",

    /**
     * value: "leopards"
     * @const
     */
    "leopards": "leopards",

    /**
     * value: "jaguars"
     * @const
     */
    "jaguars": "jaguars"
};



export default BigCat;

