var searchIndex = JSON.parse('{\
"pot":{"doc":"A concise serialization format written for <code>BonsaiDb</code>.","t":[13,13,3,13,4,13,13,13,13,13,13,13,13,13,13,13,13,6,13,13,13,13,13,13,13,13,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,5,11,11,11,11,11,11,11,0,0,11,11,11,11,11,11,11,5,5,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,3,13,13,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,3,13,13,13,13,13,13,4,13,13,13,13,13,13,13,13,4,13,4,13,13,13,13,4,13,4,13,13,13,13,13,13,13,13,13,13,13,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,12,5,5,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,3,8,3,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Bool","Bytes","Config","Eof","Error","Float","ImpreciseCastWouldLoseData","IncompatibleVersion","Integer","InvalidAtomHeader","InvalidKind","InvalidUtf8","Io","Mappings","Message","None","NotAPot","Result","Sequence","SequenceSizeMustBeKnown","String","TooManyBytesRead","TrailingBytes","UnexpectedKind","Unit","UnknownSymbol","Value","allocation_budget","as_bool","as_bytes","as_float","as_integer","as_str","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","custom","custom","de","default","deserialize","deserialize","deserialize_from","eq","fmt","fmt","fmt","fmt","format","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_mappings","from_reader","from_sequence","from_slice","into","into","into","into_static","is_empty","mappings","ne","reader","ser","serialize","serialize","serialize_into","source","to_owned","to_string","to_string","to_vec","to_writer","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","values","0","0","0","0","0","0","1","0","0","0","0","0","0","0","Borrowed","Deserializer","Owned","Persistent","SymbolMap","borrow","borrow","borrow_mut","borrow_mut","deserializer_for_slice","end_of_input","fmt","fmt","from","from","into","into","new","try_from","try_from","try_into","try_into","type_id","type_id","0","0","0","Atom","Boolean","Bytes","Bytes","F32","F64","False","Float","Float","Float","I128","I16","I32","I64","I8","Int","Integer","Integer","Kind","Map","Named","Named","None","Nucleus","Sequence","Special","Special","Symbol","True","U128","U16","U32","U64","U8","UInt","Unit","Unit","arg","as_f32","as_f32","as_f64","as_f64","as_float","as_i128","as_i16","as_i32","as_i64","as_i8","as_integer","as_u128","as_u16","as_u32","as_u64","as_u8","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","deserialize","deserialize","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from_u8","into","into","into","into","into","into","is_zero","is_zero","kind","ne","ne","nucleus","read_atom","read_atom_header","read_from","read_from","read_header","serialize","serialize","to_owned","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","write_atom_header","write_bool","write_bytes","write_f32","write_f64","write_header","write_i128","write_i16","write_i24","write_i32","write_i48","write_i64","write_i8","write_named","write_none","write_special","write_str","write_u128","write_u16","write_u24","write_u32","write_u48","write_u64","write_u8","write_unit","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","IoReader","Reader","SliceReader","borrow","borrow","borrow_mut","borrow_mut","buffered_read_bytes","buffered_read_bytes","buffered_read_bytes","fmt","from","from","from","into","into","read","read","read_exact","read_exact","read_to_end","read_to_string","read_vectored","try_from","try_from","try_into","try_into","type_id","type_id","Serializer","SymbolMap","borrow","borrow","borrow_mut","borrow_mut","default","fmt","fmt","from","from","into","into","new","serializer_for","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["pot","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pot::Error","","","","","","","pot::Value","","","","","","","pot::de","","","","","","","","","","","","","","","","","","","","","","","","pot::de::SymbolMap","","","pot::format","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pot::format::Float","","pot::format::Integer","","","","","","","","","","pot::format::Nucleus","","","","pot::reader","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pot::ser","","","","","","","","","","","","","","","","","","","",""],"d":["A boolean value","A value containing arbitrary bytes.","Serialization and deserialization configuration.","Expected more data but encountered the end of the input.","All errors that <code>Pot</code> may return.","A floating point value.","A numerical value could not be handled without losing …","Data was written with an incompatible version.","An integer value.","An atom header was incorrectly formatted.","An unknown kind was encountered. Generally a sign that …","String data contained invalid utf-8 characters.","An error occurred from io.","A sequence of key-value mappings.","A generic error occurred.","A value representing None.","Payload is not a <code>Pot</code> payload.","A result alias that returns <code>Error</code>.","A sequence of values.","A sequence of unknown size cannot be serialized.","A string value.","The amount of data read exceeds the configured maximum …","Extra data appeared at the end of the input.","Encountered an unexpected atom kind.","A value representing a Unit (<code>()</code>).","A requested symbol id was not found.","A <code>Pot</code> encoded value. This type can be used to deserialize …","Sets the maximum number of bytes able to be allocated. …","Returns the value represented as a value.","Returns the value’s bytes, or None if the value is not …","Returns the value as an <code>Float</code>. Returns None if the value …","Returns the value as an <code>Integer</code>. Returns None if the value …","Returns the value as a string, or None if the value is not …","","","","","","","","","","","Types for deserializing pots.","","Deserializes a value from a slice using the configured …","","Deserializes a value from a <code>Read</code> implementor using the …","","","","","","Low-level interface for reading and writing the pot format.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns a new value from an interator of 2-element tuples …","Restore a previously Pot-serialized value from a <code>Read</code> …","Returns a new value from an interator of items that can be …","Restore a previously Pot-serialized value from a slice.","","","","Converts <code>self</code> to a static lifetime by cloning any borrowed …","Returns true if the value contained is considered empty.","Returns an interator that iterates over all mappings …","","Types for reading data.","Types for serializing pots.","Serializes a value to a <code>Vec</code> using the configured options.","","Serializes a value to a writer using the configured …","","","","","Serialize <code>value</code> using Pot into a <code>Vce&lt;u8&gt;</code>.","Serialize <code>value</code> using Pot into <code>writer</code>.","","","","","","","","","","Returns an interator that iterates over all values …","","","","","","","","","","","","","","","A list of borrowed symbols.","Deserializer for the <code>Pot</code> format.","An owned list of symbols.","A mutable reference to an owned list of symbols.","A collection of deserialized symbols.","","","","","Returns a deserializer for <code>slice</code>.","Returns true if the input has been consumed completely.","","","","","","","Returns a new symbol map that will persist symbols between …","","","","","","","","","","An encoded <code>Kind</code>, argument, and optional contained value.","A boolean value.","A series of bytes. The argument is the length. The bytes …","A buffer of bytes.","An f32 value.","An f64 value.","The <code>false</code> boolean literal.","A floating point number that can safely convert between …","A floating point value. Argument is the byte length, minus …","A floating point value.","An i128 value.","An i16 value.","An i32 value.","An i64 value.","An i8 value.","A signed integer. Argument is the byte length, minus one. …","An integer type that can safely convert between other …","An integer value.","The type of an atom.","A list of key-value pairs. Argument is the count of …","A named value. A symbol followed by another value.","A named value.","A None value.","A value contained within an <code>Atom</code>.","A list of atoms. Argument is the count of atoms in the …","A special value type.","A value with a special meaning.","A symbol. If the least-significant bit of the arg is 0, …","The <code>true</code> boolean literal.","An u128 value.","An u16 value.","An u32 value.","An u64 value.","An u8 value.","An unsigned integer. Argument is the byte length, minus …","A Unit value.","A unit.","The argument contained in the atom header.","Converts this integer to an f32, but only if it can be …","Returns this number as an f32, if it can be done without …","Converts this integer to an f64, but only if it can be …","Returns this number as an f64.","Converts this integer to an f64, but only if it can be …","Returns the contained value as an i64, or an error if the …","Returns the contained value as an i16, or an error if the …","Returns the contained value as an i32, or an error if the …","Returns the contained value as an i64, or an error if the …","Returns the contained value as an i8, or an error if the …","Returns this number as an <code>Integer</code>, if the stored value has …","Returns the contained value as an u64, or an error if the …","Returns the contained value as an u16, or an error if the …","Returns the contained value as an u32, or an error if the …","Returns the contained value as an u64, or an error if the …","Returns the contained value as an u8, or an error if the …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Converts from a u8. Returns an error if <code>kind</code> is an invalid …","","","","","","","Returns true if the value contained is zero.","Returns true if the value contained is zero.","The type of atom.","","","The contained value, if any.","Reads an atom.","Reads an atom header (kind and argument).","Reads an integer based on the atom header (<code>kind</code> and …","Reads a floating point number given the atom <code>kind</code> and …","Reads a Pot header. See <code>write_header</code> for more information. …","","","","","","","","","","","","","","","","","","","","","","","","","","","","Writes an atom header into <code>writer</code>.","Writes a <code>Kind::Special</code> atom with either <code>Special::True</code> or …","Writes an <code>Kind::Bytes</code> atom with the given value.","Writes an <code>Kind::Float</code> atom with the given value.","Writes an <code>Kind::Float</code> atom with the given value.","Writes the Pot header. A u32 written in big endian. The …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes a <code>Kind::Special</code> atom with <code>Special::Named</code>.","Writes a <code>Kind::Special</code> atom with <code>Special::None</code>.","Writes a <code>Kind::Special</code> atom.","Writes an <code>Kind::Bytes</code> atom with the bytes of the string.","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::Int</code> atom with the given value. Will encode …","Writes an <code>Kind::UInt</code> atom with the given value.","Writes a <code>Kind::Special</code> atom with <code>Special::Unit</code>.","","","","","","","","","","","","","","","","","A reader over <code>ReadBytesExt</code>.","A reader that can temporarily buffer bytes read.","Reads data from a slice.","","","","","Read exactly <code>length</code> bytes and return a reference to the …","","","","","","","","","","","","","","","","","","","","","","A <code>Pot</code> serializer.","A list of previously serialized symbols.","","","","","","","","","","","","Returns a new serializer outputting written bytes into …","Returns a serializer that writes into <code>output</code> that persists …","","","","","",""],"i":[1,1,0,2,0,1,2,2,1,2,2,2,2,1,2,1,2,0,1,2,1,2,2,2,1,2,0,3,1,1,1,1,1,3,2,1,3,2,1,1,1,2,2,0,3,3,1,3,1,2,2,1,1,0,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,3,2,1,1,1,1,1,0,0,3,1,3,2,1,2,1,0,0,3,2,1,3,2,1,3,2,1,1,4,5,6,7,8,9,8,10,11,12,13,14,15,16,17,0,17,17,0,18,17,18,17,17,18,18,17,18,17,18,17,17,18,17,18,17,18,17,19,20,21,0,22,23,22,24,24,25,0,23,22,26,26,26,26,26,23,0,22,0,23,25,22,25,0,23,0,23,23,25,26,26,26,26,26,23,25,22,27,26,24,26,24,26,26,26,26,26,26,24,26,26,26,26,26,23,25,26,27,24,22,23,25,26,27,24,22,23,25,26,24,23,25,26,24,26,24,23,25,26,24,23,25,26,26,27,24,24,22,23,25,26,27,24,22,23,23,25,26,27,24,22,26,24,27,26,24,27,0,0,26,24,0,26,24,23,25,26,24,26,24,23,25,25,26,27,24,22,23,25,26,27,24,22,23,25,26,27,24,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,0,0,0,44,45,44,45,46,44,45,44,44,44,45,44,45,44,45,44,45,45,45,45,44,45,44,45,44,45,0,0,47,48,47,48,48,47,48,47,48,47,48,47,48,47,48,47,48,47,48],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["usize",15]]],[[],["bool",15]],[[],["option",4]],[[],[["option",4,["float"]],["float",4]]],[[],[["option",4,["integer"]],["integer",4]]],[[],[["str",15],["option",4,["str"]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["value",4]],[[]],[[["display",8]]],[[["display",8]]],null,[[]],[[],["result",6]],[[],["result",4]],[[["read",8]],["result",6]],[[["value",4]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],null,[[]],[[["utf8error",3]]],[[["error",3]]],[[["fromutf8error",3]]],[[]],[[["u64",15]]],[[["i8",15]]],[[["vec",3]]],[[["value",4],["vec",3,["value"]]]],[[["string",3]]],[[["value",4],["option",4,["value"]]]],[[]],[[["bool",15]]],[[["u8",15]]],[[["u16",15]]],[[["u32",15]]],[[]],[[["u128",15]]],[[["str",15]]],[[["i16",15]]],[[["i32",15]]],[[["i64",15]]],[[["i128",15]]],[[["f32",15]]],[[["f64",15]]],[[]],[[["u8",15],["vec",3,["u8"]]]],[[]],[[["intoiterator",8]]],[[],["result",6]],[[["intoiterator",8]]],[[],["result",6]],[[]],[[]],[[]],[[],["value",4]],[[],["bool",15]],[[],["iter",3]],[[["value",4]],["bool",15]],null,null,[[],[["vec",3,["u8"]],["result",6,["vec"]]]],[[],["result",4]],[[],["result",6]],[[],[["option",4,["error"]],["error",8]]],[[]],[[],["string",3]],[[],["string",3]],[[],[["vec",3,["u8"]],["result",6,["vec"]]]],[[],["result",6]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["sequenceiter",4]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[],[["deserializer",3,["slicereader"]],["result",6,["deserializer"]]]],[[],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],[["result",4,["f32","error"]],["f32",15],["error",4]]],[[],[["result",4,["f32","error"]],["f32",15],["error",4]]],[[],[["result",4,["f64","error"]],["error",4],["f64",15]]],[[],["f64",15]],[[],[["result",4,["float","error"]],["float",4],["error",4]]],[[],[["i128",15],["error",4],["result",4,["i128","error"]]]],[[],[["result",4,["i16","error"]],["error",4],["i16",15]]],[[],[["result",4,["i32","error"]],["i32",15],["error",4]]],[[],[["result",4,["i64","error"]],["error",4],["i64",15]]],[[],[["result",4,["i8","error"]],["i8",15],["error",4]]],[[],[["result",4,["integer","error"]],["integer",4],["error",4]]],[[],[["result",4,["u128","error"]],["u128",15],["error",4]]],[[],[["result",4,["u16","error"]],["u16",15],["error",4]]],[[],[["result",4,["u32","error"]],["u32",15],["error",4]]],[[],[["result",4,["u64","error"]],["u64",15],["error",4]]],[[],[["result",4,["u8","error"]],["u8",15],["error",4]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["kind",4]],[[],["special",4]],[[],["integer",4]],[[],["float",4]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[["kind",4]],["bool",15]],[[["special",4]],["bool",15]],[[["integer",4]],["bool",15]],[[["float",4]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["u8",15]],[["result",4,["error"]],["error",4]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["bool",15]],[[],["bool",15]],null,[[["integer",4]],["bool",15]],[[["float",4]],["bool",15]],null,[[["usize",15]],[["error",4],["atom",3],["result",4,["atom","error"]]]],[[],[["result",4,["error"]],["error",4]]],[[["usize",15],["kind",4]],[["result",4,["error"]],["error",4]]],[[["usize",15],["kind",4]],[["result",4,["error"]],["error",4]]],[[],[["result",4,["u8","error"]],["u8",15],["error",4]]],[[],["result",4]],[[],["result",4]],[[]],[[]],[[]],[[]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[["u64",15]],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[["u64",15],["option",4,["u64"]],["kind",4]],[["usize",15],["result",6,["usize"]]]],[[["bool",15]],[["usize",15],["result",6,["usize"]]]],[[],[["usize",15],["result",6,["usize"]]]],[[["f32",15]],[["usize",15],["result",6,["usize"]]]],[[["f64",15]],[["usize",15],["result",6,["usize"]]]],[[["u8",15]],[["usize",15],["result",6,["usize"]]]],[[["i128",15]],[["usize",15],["result",6,["usize"]]]],[[["i16",15]],[["usize",15],["result",6,["usize"]]]],[[["i32",15]],[["usize",15],["result",6,["usize"]]]],[[["i32",15]],[["usize",15],["result",6,["usize"]]]],[[["i64",15]],[["usize",15],["result",6,["usize"]]]],[[["i64",15]],[["usize",15],["result",6,["usize"]]]],[[["i8",15]],[["usize",15],["result",6,["usize"]]]],[[],[["usize",15],["result",6,["usize"]]]],[[],[["usize",15],["result",6,["usize"]]]],[[["special",4]],[["usize",15],["result",6,["usize"]]]],[[["str",15]],[["usize",15],["result",6,["usize"]]]],[[["u128",15]],[["usize",15],["result",6,["usize"]]]],[[["u16",15]],[["usize",15],["result",6,["usize"]]]],[[["u32",15]],[["usize",15],["result",6,["usize"]]]],[[["u32",15]],[["usize",15],["result",6,["usize"]]]],[[["u64",15]],[["usize",15],["result",6,["usize"]]]],[[["u64",15]],[["usize",15],["result",6,["usize"]]]],[[["u8",15]],[["usize",15],["result",6,["usize"]]]],[[],[["usize",15],["result",6,["usize"]]]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[["usize",15]],[["cow",4],["error",4],["result",4,["cow","error"]]]],[[["usize",15]],[["cow",4],["error",4],["result",4,["cow","error"]]]],[[["usize",15]],[["cow",4],["error",4],["result",4,["cow","error"]]]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[],[["usize",15],["result",6,["usize"]]]],[[],[["usize",15],["result",6,["usize"]]]],[[],["result",6]],[[],["result",6]],[[["vec",3]],[["usize",15],["result",6,["usize"]]]],[[["string",3]],[["usize",15],["result",6,["usize"]]]],[[],[["usize",15],["result",6,["usize"]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null,[[]],[[]],[[]],[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[],["result",6]],[[["writebytesext",8]],[["serializer",3],["result",6,["serializer"]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[4,"Value"],[4,"Error"],[3,"Config"],[13,"Message"],[13,"Io"],[13,"InvalidUtf8"],[13,"InvalidKind"],[13,"UnexpectedKind"],[13,"UnknownSymbol"],[13,"Bool"],[13,"Integer"],[13,"Float"],[13,"Bytes"],[13,"String"],[13,"Sequence"],[13,"Mappings"],[4,"SymbolMap"],[3,"Deserializer"],[13,"Owned"],[13,"Persistent"],[13,"Borrowed"],[4,"Nucleus"],[4,"Kind"],[4,"Float"],[4,"Special"],[4,"Integer"],[3,"Atom"],[13,"F64"],[13,"F32"],[13,"I8"],[13,"I16"],[13,"I32"],[13,"I64"],[13,"I128"],[13,"U8"],[13,"U16"],[13,"U32"],[13,"U64"],[13,"U128"],[13,"Boolean"],[13,"Integer"],[13,"Float"],[13,"Bytes"],[3,"SliceReader"],[3,"IoReader"],[8,"Reader"],[3,"Serializer"],[3,"SymbolMap"]]},\
"xtask":{"doc":"","t":[3,11,11,11,11,11,5,11,11,11],"n":["CoverageConfig","borrow","borrow_mut","from","ignore_paths","into","main","try_from","try_into","type_id"],"q":["xtask","","","","","","","","",""],"d":["","","","","","","","","",""],"i":[0,1,1,1,1,1,0,1,1,1],"f":[null,[[]],[[]],[[]],[[],[["string",3],["vec",3,["string"]]]],[[]],[[],["result",6]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[3,"CoverageConfig"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};