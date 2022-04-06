(function() {var implementors = {};
implementors["parquet2"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/error/enum.Feature.html\" title=\"enum parquet2::error::Feature\">Feature</a>","synthetic":true,"types":["parquet2::error::Feature"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":true,"types":["parquet2::error::Error"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/compression/enum.Compression.html\" title=\"enum parquet2::compression::Compression\">Compression</a>","synthetic":true,"types":["parquet2::parquet_bridge::Compression"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/deserialize/enum.BinaryPageState.html\" title=\"enum parquet2::deserialize::BinaryPageState\">BinaryPageState</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::deserialize::binary::BinaryPageState"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/deserialize/enum.BooleanPageState.html\" title=\"enum parquet2::deserialize::BooleanPageState\">BooleanPageState</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::deserialize::boolean::BooleanPageState"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/deserialize/struct.FixexBinaryIter.html\" title=\"struct parquet2::deserialize::FixexBinaryIter\">FixexBinaryIter</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::deserialize::fixed_len::FixexBinaryIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/deserialize/enum.FixedLenBinaryPageState.html\" title=\"enum parquet2::deserialize::FixedLenBinaryPageState\">FixedLenBinaryPageState</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::deserialize::fixed_len::FixedLenBinaryPageState"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/deserialize/enum.HybridEncoded.html\" title=\"enum parquet2::deserialize::HybridEncoded\">HybridEncoded</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::deserialize::hybrid_rle::HybridEncoded"]},{"text":"impl&lt;'a, I&gt; Freeze for <a class=\"struct\" href=\"parquet2/deserialize/struct.HybridRleIter.html\" title=\"struct parquet2::deserialize::HybridRleIter\">HybridRleIter</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::deserialize::hybrid_rle::HybridRleIter"]},{"text":"impl&lt;'a, I&gt; Freeze for <a class=\"struct\" href=\"parquet2/deserialize/struct.HybridRleBooleanIter.html\" title=\"struct parquet2::deserialize::HybridRleBooleanIter\">HybridRleBooleanIter</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::deserialize::hybrid_rle::HybridRleBooleanIter"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"enum\" href=\"parquet2/deserialize/enum.NativePageState.html\" title=\"enum parquet2::deserialize::NativePageState\">NativePageState</a>&lt;'a, T&gt;","synthetic":true,"types":["parquet2::deserialize::native::NativePageState"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/deserialize/enum.DefLevelsDecoder.html\" title=\"enum parquet2::deserialize::DefLevelsDecoder\">DefLevelsDecoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::deserialize::utils::DefLevelsDecoder"]},{"text":"impl&lt;T, V, I&gt; Freeze for <a class=\"struct\" href=\"parquet2/deserialize/struct.OptionalValues.html\" title=\"struct parquet2::deserialize::OptionalValues\">OptionalValues</a>&lt;T, V, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::deserialize::utils::OptionalValues"]},{"text":"impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"parquet2/deserialize/struct.SliceFilteredIter.html\" title=\"struct parquet2::deserialize::SliceFilteredIter\">SliceFilteredIter</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::deserialize::utils::SliceFilteredIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/bitpacking/struct.Decoder.html\" title=\"struct parquet2::encoding::bitpacking::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::bitpacking::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/delta_bitpacked/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_bitpacked::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::delta_bitpacked::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/delta_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::delta_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/delta_length_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_length_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::delta_length_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.BitmapIter.html\" title=\"struct parquet2::encoding::hybrid_rle::BitmapIter\">BitmapIter</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::bitmap::BitmapIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.Decoder.html\" title=\"struct parquet2::encoding::hybrid_rle::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/encoding/hybrid_rle/enum.HybridEncoded.html\" title=\"enum parquet2::encoding::hybrid_rle::HybridEncoded\">HybridEncoded</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::HybridEncoded"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.HybridRleDecoder.html\" title=\"struct parquet2::encoding::hybrid_rle::HybridRleDecoder\">HybridRleDecoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::HybridRleDecoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/plain_byte_array/struct.BinaryIter.html\" title=\"struct parquet2::encoding::plain_byte_array::BinaryIter\">BinaryIter</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::plain_byte_array::BinaryIter"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/encoding/enum.Encoding.html\" title=\"enum parquet2::encoding::Encoding\">Encoding</a>","synthetic":true,"types":["parquet2::parquet_bridge::Encoding"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.NativeIndex.html\" title=\"struct parquet2::indexes::NativeIndex\">NativeIndex</a>&lt;T&gt;","synthetic":true,"types":["parquet2::indexes::index::NativeIndex"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.PageIndex.html\" title=\"struct parquet2::indexes::PageIndex\">PageIndex</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::indexes::index::PageIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.ByteIndex.html\" title=\"struct parquet2::indexes::ByteIndex\">ByteIndex</a>","synthetic":true,"types":["parquet2::indexes::index::ByteIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.FixedLenByteIndex.html\" title=\"struct parquet2::indexes::FixedLenByteIndex\">FixedLenByteIndex</a>","synthetic":true,"types":["parquet2::indexes::index::FixedLenByteIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.BooleanIndex.html\" title=\"struct parquet2::indexes::BooleanIndex\">BooleanIndex</a>","synthetic":true,"types":["parquet2::indexes::index::BooleanIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.Interval.html\" title=\"struct parquet2::indexes::Interval\">Interval</a>","synthetic":true,"types":["parquet2::indexes::intervals::Interval"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/indexes/struct.FilteredPage.html\" title=\"struct parquet2::indexes::FilteredPage\">FilteredPage</a>","synthetic":true,"types":["parquet2::indexes::intervals::FilteredPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/indexes/enum.BoundaryOrder.html\" title=\"enum parquet2::indexes::BoundaryOrder\">BoundaryOrder</a>","synthetic":true,"types":["parquet2::parquet_bridge::BoundaryOrder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.ColumnChunkMetaData.html\" title=\"struct parquet2::metadata::ColumnChunkMetaData\">ColumnChunkMetaData</a>","synthetic":true,"types":["parquet2::metadata::column_chunk_metadata::ColumnChunkMetaData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.Descriptor.html\" title=\"struct parquet2::metadata::Descriptor\">Descriptor</a>","synthetic":true,"types":["parquet2::metadata::column_descriptor::Descriptor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.ColumnDescriptor.html\" title=\"struct parquet2::metadata::ColumnDescriptor\">ColumnDescriptor</a>","synthetic":true,"types":["parquet2::metadata::column_descriptor::ColumnDescriptor"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/metadata/enum.ColumnOrder.html\" title=\"enum parquet2::metadata::ColumnOrder\">ColumnOrder</a>","synthetic":true,"types":["parquet2::metadata::column_order::ColumnOrder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.FileMetaData.html\" title=\"struct parquet2::metadata::FileMetaData\">FileMetaData</a>","synthetic":true,"types":["parquet2::metadata::file_metadata::FileMetaData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.RowGroupMetaData.html\" title=\"struct parquet2::metadata::RowGroupMetaData\">RowGroupMetaData</a>","synthetic":true,"types":["parquet2::metadata::row_metadata::RowGroupMetaData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.SchemaDescriptor.html\" title=\"struct parquet2::metadata::SchemaDescriptor\">SchemaDescriptor</a>","synthetic":true,"types":["parquet2::metadata::schema_descriptor::SchemaDescriptor"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/metadata/enum.SortOrder.html\" title=\"enum parquet2::metadata::SortOrder\">SortOrder</a>","synthetic":true,"types":["parquet2::metadata::sort::SortOrder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.BinaryPageDict.html\" title=\"struct parquet2::page::BinaryPageDict\">BinaryPageDict</a>","synthetic":true,"types":["parquet2::page::page_dict::binary::BinaryPageDict"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.FixedLenByteArrayPageDict.html\" title=\"struct parquet2::page::FixedLenByteArrayPageDict\">FixedLenByteArrayPageDict</a>","synthetic":true,"types":["parquet2::page::page_dict::fixed_len_binary::FixedLenByteArrayPageDict"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"parquet2/page/struct.PrimitivePageDict.html\" title=\"struct parquet2::page::PrimitivePageDict\">PrimitivePageDict</a>&lt;T&gt;","synthetic":true,"types":["parquet2::page::page_dict::primitive::PrimitivePageDict"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.EncodedDictPage.html\" title=\"struct parquet2::page::EncodedDictPage\">EncodedDictPage</a>","synthetic":true,"types":["parquet2::page::page_dict::EncodedDictPage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.CompressedDictPage.html\" title=\"struct parquet2::page::CompressedDictPage\">CompressedDictPage</a>","synthetic":true,"types":["parquet2::page::page_dict::CompressedDictPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.PageType.html\" title=\"enum parquet2::page::PageType\">PageType</a>","synthetic":true,"types":["parquet2::parquet_bridge::PageType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.CompressedDataPage.html\" title=\"struct parquet2::page::CompressedDataPage\">CompressedDataPage</a>","synthetic":true,"types":["parquet2::page::CompressedDataPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.DataPageHeader.html\" title=\"enum parquet2::page::DataPageHeader\">DataPageHeader</a>","synthetic":true,"types":["parquet2::page::DataPageHeader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.DataPage.html\" title=\"struct parquet2::page::DataPage\">DataPage</a>","synthetic":true,"types":["parquet2::page::DataPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.Page.html\" title=\"enum parquet2::page::Page\">Page</a>","synthetic":true,"types":["parquet2::page::Page"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.EncodedPage.html\" title=\"enum parquet2::page::EncodedPage\">EncodedPage</a>","synthetic":true,"types":["parquet2::page::EncodedPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.CompressedPage.html\" title=\"enum parquet2::page::CompressedPage\">CompressedPage</a>","synthetic":true,"types":["parquet2::page::CompressedPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/enum.Repetition.html\" title=\"enum parquet2::schema::Repetition\">Repetition</a>","synthetic":true,"types":["parquet2::parquet_bridge::Repetition"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.TimeUnit.html\" title=\"enum parquet2::schema::types::TimeUnit\">TimeUnit</a>","synthetic":true,"types":["parquet2::parquet_bridge::TimeUnit"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.IntegerType.html\" title=\"enum parquet2::schema::types::IntegerType\">IntegerType</a>","synthetic":true,"types":["parquet2::parquet_bridge::IntegerType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.PrimitiveLogicalType.html\" title=\"enum parquet2::schema::types::PrimitiveLogicalType\">PrimitiveLogicalType</a>","synthetic":true,"types":["parquet2::parquet_bridge::PrimitiveLogicalType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.GroupLogicalType.html\" title=\"enum parquet2::schema::types::GroupLogicalType\">GroupLogicalType</a>","synthetic":true,"types":["parquet2::parquet_bridge::GroupLogicalType"]},{"text":"impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.Decompressor.html\" title=\"struct parquet2::read::Decompressor\">Decompressor</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::read::compression::Decompressor"]},{"text":"impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.BasicDecompressor.html\" title=\"struct parquet2::read::BasicDecompressor\">BasicDecompressor</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::read::compression::BasicDecompressor"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.IndexedPageReader.html\" title=\"struct parquet2::read::IndexedPageReader\">IndexedPageReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::read::page::indexed_reader::IndexedPageReader"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.PageReader.html\" title=\"struct parquet2::read::PageReader\">PageReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::read::page::reader::PageReader"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"parquet2/read/enum.State.html\" title=\"enum parquet2::read::State\">State</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::read::State"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.ColumnIterator.html\" title=\"struct parquet2::read::ColumnIterator\">ColumnIterator</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::read::ColumnIterator"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/read/struct.ReadColumnIterator.html\" title=\"struct parquet2::read::ReadColumnIterator\">ReadColumnIterator</a>","synthetic":true,"types":["parquet2::read::ReadColumnIterator"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.PhysicalType.html\" title=\"enum parquet2::schema::types::PhysicalType\">PhysicalType</a>","synthetic":true,"types":["parquet2::schema::types::physical_type::PhysicalType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/schema/types/struct.FieldInfo.html\" title=\"struct parquet2::schema::types::FieldInfo\">FieldInfo</a>","synthetic":true,"types":["parquet2::schema::types::basic_type::FieldInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.PrimitiveConvertedType.html\" title=\"enum parquet2::schema::types::PrimitiveConvertedType\">PrimitiveConvertedType</a>","synthetic":true,"types":["parquet2::schema::types::converted_type::PrimitiveConvertedType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.GroupConvertedType.html\" title=\"enum parquet2::schema::types::GroupConvertedType\">GroupConvertedType</a>","synthetic":true,"types":["parquet2::schema::types::converted_type::GroupConvertedType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/schema/types/struct.PrimitiveType.html\" title=\"struct parquet2::schema::types::PrimitiveType\">PrimitiveType</a>","synthetic":true,"types":["parquet2::schema::types::parquet_type::PrimitiveType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.ParquetType.html\" title=\"enum parquet2::schema::types::ParquetType\">ParquetType</a>","synthetic":true,"types":["parquet2::schema::types::parquet_type::ParquetType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.BinaryStatistics.html\" title=\"struct parquet2::statistics::BinaryStatistics\">BinaryStatistics</a>","synthetic":true,"types":["parquet2::statistics::binary::BinaryStatistics"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.BooleanStatistics.html\" title=\"struct parquet2::statistics::BooleanStatistics\">BooleanStatistics</a>","synthetic":true,"types":["parquet2::statistics::boolean::BooleanStatistics"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.FixedLenStatistics.html\" title=\"struct parquet2::statistics::FixedLenStatistics\">FixedLenStatistics</a>","synthetic":true,"types":["parquet2::statistics::fixed_len_binary::FixedLenStatistics"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.PrimitiveStatistics.html\" title=\"struct parquet2::statistics::PrimitiveStatistics\">PrimitiveStatistics</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::statistics::primitive::PrimitiveStatistics"]},{"text":"impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"parquet2/write/struct.Compressor.html\" title=\"struct parquet2::write::Compressor\">Compressor</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::write::compression::Compressor"]},{"text":"impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"parquet2/write/struct.FileWriter.html\" title=\"struct parquet2::write::FileWriter\">FileWriter</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::write::file::FileWriter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/write/struct.ColumnOffsetsMetadata.html\" title=\"struct parquet2::write::ColumnOffsetsMetadata\">ColumnOffsetsMetadata</a>","synthetic":true,"types":["parquet2::write::row_group::ColumnOffsetsMetadata"]},{"text":"impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"parquet2/write/struct.FileStreamer.html\" title=\"struct parquet2::write::FileStreamer\">FileStreamer</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::write::stream::FileStreamer"]},{"text":"impl&lt;'a, V&gt; Freeze for <a class=\"struct\" href=\"parquet2/write/struct.DynIter.html\" title=\"struct parquet2::write::DynIter\">DynIter</a>&lt;'a, V&gt;","synthetic":true,"types":["parquet2::write::dyn_iter::DynIter"]},{"text":"impl&lt;'a, V, E&gt; Freeze for <a class=\"struct\" href=\"parquet2/write/struct.DynStreamingIterator.html\" title=\"struct parquet2::write::DynStreamingIterator\">DynStreamingIterator</a>&lt;'a, V, E&gt;","synthetic":true,"types":["parquet2::write::dyn_iter::DynStreamingIterator"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/write/struct.WriteOptions.html\" title=\"struct parquet2::write::WriteOptions\">WriteOptions</a>","synthetic":true,"types":["parquet2::write::WriteOptions"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/write/enum.Version.html\" title=\"enum parquet2::write::Version\">Version</a>","synthetic":true,"types":["parquet2::write::Version"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()