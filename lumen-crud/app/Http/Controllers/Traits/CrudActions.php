<?php




namespace App\Http\Controllers\Traits;

use Illuminate\Http\Request;


trait CrudActions
{

	protected $statusCodes = [
		'done' => 200,
		'created' => 201,
		'removed' => 204,
		'not_valid' => 400,
		'not_found' => 404,
		'conflict' => 409,
		'permissions' => 401
	];

	public function all()
	{
		$m = self::MODEL;
		return $this->respond('done', $m::getAll());
	}

	public function get($id)
	{
		$m = self::MODEL;
		$model = $m::getById($id);
		if (is_null($model)) {
			return $this->respond('not_found');
		}
		return $this->respond('done', $model);
	}

	public function add(Request $request)
	{
		$m = self::MODEL;
		$this->validate($request, $m::$rules);
		$newObject = $m::create($m::inCreating());
		$newObject->afterCreate();
		return $this->respond('created', $newObject);
	}

	public function put(Request $request, $id)
	{
		$m = self::MODEL;
		$this->validate($request, $m::$rules);
		$model = $m::find($id);
		if (is_null($model)) {
			return $this->respond('not_found');
		}
		$model->update($request->all());
		return $this->respond('done', $model);
	}

	public function remove($id)
	{
		$m = self::MODEL;
		if (is_null($m::find($id))) {
			return $this->respond('not_found');
		}
		$m::destroy($id);
		return $this->respond('removed');
	}

	protected function respond($status, $data = [])
	{
		return response()->json($data, $this->statusCodes[$status]);
	}
}
